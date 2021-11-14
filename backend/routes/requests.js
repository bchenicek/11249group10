const router = require('express').Router();

let Request = require('../models/request.model');

router.route('/').get((req, res) => {
    Request.find()
        .then(requests => res.json(requests))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/friend').get((req, res) => {
    Request.find( { type: "friend-request" })
        .then(requests => res.json(requests))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/friend').post((req, res) => {
    const requestor = req.body.requestor;
    const recipient = req.body.recipient;
    const type = "friend-request";
    const group_id = null;
    
    const newRequest = new Request({ 
        requestor,
        recipient,
        type,
        group_id
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

router.route('/group').get((req, res) => {
    Request.find( { type: "group-request" })
        .then(requests => res.json(requests))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/group').post((req, res) => {
    const requestor = req.body.requestor;
    const recipient = req.body.recipient;
    const type = "group-request";
    const group_id = req.body.group_id;
    
    const newRequest = new Request({ 
        requestor,
        recipient,
        type,
        group_id
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

router.route('/join').put((req, res) => {
    const group_id = req.body.group_id;
    const new_member = req.body.new_member;

    Group.findById(group_id)
        .then(group => {
            const updated_members = group.members;
            updated_members.push(new_member);
            
            Group.findByIdAndUpdate(group_id, { members: updated_members }, { upsert: true })
                .then(updated_group => {
                    res.json(updated_group)
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

router.route('/update').put((req, res) => {
    const group_id = req.body.group_id;

    Group.findById(group_id)
        .then(group => {
            const updatedGroup = new Group({ 
                _id: group_id,
                group_name: req.body.group_name,
                group_type: req.body.group_type,
                is_private: req.body.is_private,
                description: req.body.description,
                city: req.body.city,
                state: req.body.state,
                owner: req.body.owner,
                members: req.body.members 
            });
            
            Group.findByIdAndUpdate(group_id, updatedGroup.toObject(), { upsert: true })
                .then(updated_group => {
                    res.json(updated_group)
                })
                .catch(err => {
                    res.status(400).json({
                        "status": "catch_error",
                        "message": "An error was thrown while updating the group."
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

module.exports = router;