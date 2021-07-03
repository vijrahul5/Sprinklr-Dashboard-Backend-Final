const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "",
    key: "",
    secret: "",
    cluster: "",
    useTLS: true,
});

function triggerChannel(obj) {
    console.log("Channel Triggered");
    pusher.trigger("my-channel", obj.cid, {
        details: obj,
    });
}

function handleNotification(req, res) {
    res.sendStatus(200);
    let obj = {
        type: req.body.issue_event_type_name,
        userId: req.body.user.accountId,
        key: req.body.issue.key,
        cid: req.query.cid,
    };
    triggerChannel(obj);
}

module.exports.handleNotification = handleNotification;