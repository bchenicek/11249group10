const router = require('express').Router();

let Request = require('../models/request.model');
let Group = require('../models/group.model');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    Request.find()
        .then(requests => res.json(requests))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/match-group').post((req, res) => {
    const group_id = req.body.group_id;
    const requestor_id = req.body.requestor_id;

    Request.find({ group_id: group_id, requestor_id: requestor_id })
        .then(request => res.json(request))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/match-friend').post((req, res) => {
    const recipient = req.body.recipient;
    const type = req.body.type;
    const requestor_id = req.body.requestor_id;

    Request.find({ recipient: recipient, type: type, requestor_id: requestor_id })
        .then(request => res.json(request))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/sent/:id').get((req, res) => {
    Request.find({ requestor_id: req.params.id })
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/received/:id').get((req, res) => {
    Request.find({ recipient: req.params.id })
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/friend').get((req, res) => {
    Request.find( { type: "friend-request" })
        .then(requests => res.json(requests))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/friend').post((req, res) => {
    const requestor_id = req.body.requestor_id;
    const requestor_name = req.body.requestor_name;
    const recipient = req.body.recipient;
    const recipient_name = req.body.recipient_name;
    const type = "Friend Request";
    const group_id = null;
    const group_name = null;
    const message = null;
    
    const newRequest = new Request({ 
        requestor_id,
        requestor_name,
        recipient,
        recipient_name,
        type,
        group_id,
        group_name,
        message
    });

    newRequest.save()
        .then(() => res.json('Friend request created!'))
        .catch(err => {
            res.status(400).json({
                "status": "catch_error",
                "message": "An error was thrown while saving the request to the database."
            })
        })
});

router.route('/friend/accept').post((req, res) => {
    const recipient = req.body.recipient;
    const requestor_id = req.body.requestor_id;
    
    User.findById(recipient)
        .then(user => {
            const updated_friends = user.friends;
            
            if (!updated_friends.includes(requestor_id)) {
                updated_friends.push(requestor_id);
            }
            
            User.findByIdAndUpdate(recipient, { friends: updated_friends }, { upsert: true })
                .then(updated_user => {
                    User.findById(requestor_id)
                        .then(requestor => {
                            const updated_friends_2 = requestor.friends;

                            if (!updated_friends_2.includes(recipient)) {
                                updated_friends_2.push(recipient);
                            }

                            User.findByIdAndUpdate(requestor_id, { friends: updated_friends_2 }, { upsert: true })
                                .then(updated_user_2 => {
                                    res.json(updated_user_2);
                                })
                                .catch(err => res.json(err))
                        })
                })
                .catch(err => res.json(err))
        })
        .catch(err => res.json(err))
});

router.route('/group').get((req, res) => {
    Request.find( { type: "group-request" })
        .then(requests => res.json(requests))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/group').post((req, res) => {
    const requestor_id = req.body.requestor_id;
    const requestor_name = req.body.requestor_name;
    const recipient = req.body.recipient;
    const recipient_name = null;
    const type = "Group Join Request";
    const group_id = req.body.group_id;
    const group_name = req.body.group_name;
    const message = null;
    
    const newRequest = new Request({ 
        requestor_id,
        requestor_name,
        recipient,
        recipient_name,
        type,
        group_id,
        group_name,
        message
    });

    newRequest.save()
        .then(() => res.json('Group join request created!'))
        .catch(err => {
            res.status(400).json({
                "status": "catch_error",
                "message": "An error was thrown while saving the request to the database."
            })
        })
});

router.route('/group/accept').post((req, res) => {
    const new_member = req.body.new_member;
    const group_id = req.body.group_id;
    
    Group.findById(group_id)
        .then(group => {
            const updated_members = group.members;
            
            if (!updated_members.includes(new_member)) {
                updated_members.push(new_member);
            }
            
            Group.findByIdAndUpdate(group_id, { members: updated_members }, { upsert: true })
                .then(updated_group => {
                    User.findById(new_member)
                        .then(new_member_obj => {
                            const updated_groups = new_member_obj.groups;

                            if (!updated_groups.includes(group_id)) {
                                updated_groups.push(group_id);
                            }

                            User.findByIdAndUpdate(new_member, { groups: updated_groups }, { upsert: true })
                                .then(updated_user => {
                                    res.json(updated_user);
                                })
                                .catch(err => {
                                    res.status(400).json({
                                        "status": "catch_error",
                                        "message": "An error was thrown while assigning group to user."
                                    })
                            })
                        })
                })
                .catch(err => {
                    res.status(400).json({
                        "status": "catch_error",
                        "message": "An error was thrown while adding member to the group."
                    })
                })
        })
        .catch(err => {
            res.status(400).json({
                "status": "catch_error",
                "message": "An error was thrown while finding the group."
            })
        })
});

router.route('/:id').delete((req, res) => {
    Request.findByIdAndDelete(req.params.id)
        .then(() => res.json('Request rejected!'))
        .catch(err => {
            res.status(400).json({
                "status": "catch_error",
                "message": "An error was thrown while deleting the request."
            })
        });
});

module.exports = router;