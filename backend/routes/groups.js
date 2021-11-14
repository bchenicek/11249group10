const router = require('express').Router();

let Group = require('../models/group.model');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    Group.find()
        .then(groups => res.json(groups))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Group.findById(req.params.id)
        .then(group => res.json(group))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
    const group_name = req.body.group_name;
    const group_type = req.body.group_type;
    const is_private = req.body.is_private;
    const description = req.body.description;
    const city = req.body.city;
    const state = req.body.state;
    const zip_code = req.body.zip_code;
    const owner = req.body.owner;
    const members = req.body.members;
    
    const newGroup = new Group({ 
        group_name,
        group_type,
        is_private,
        description,
        city,
        state,
        zip_code,
        owner,
        members 
    });

    newGroup.save()
        .then(group => {
            const group_id = group._id.toString();

            User.findById(owner)
                .then(owner_obj => {
                    const updated_groups = owner_obj.groups;

                    if (!updated_groups.includes(group_id)) {
                        updated_groups.push(group_id);
                    }

                    User.findByIdAndUpdate(owner, { groups: updated_groups }, { upsert: true })
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
                "message": "An error was thrown while saving the group to the database."
            })
        })
});

router.route('/join').put((req, res) => {
    const group_id = req.body.group_id;
    const new_member = req.body.new_member;

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
                zip_code: req.body.zip_code,
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