const db = require('./db/models')


const loginUser = (req, res, user) => {

    req.session.auth = {
        userId: user.id,
    };
    res.locals.user = true
    res.locals.user = user.id
    req.session.save(() => {
        res.redirect('/')
    });
};


const restoreUser = async (req, res, next) => {
    // Log the session object to the console
    // to assist with debugging.

    if (req.session.auth) {
        const { userId } = req.session.auth;

        try {
            const user = await db.User.findByPk(userId);

            if (user) {

                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        } catch (err) {
            res.locals.authenticated = false;
            next(err);
        }
    } else {
        res.locals.authenticated = false;
        next();
    }
};

const logoutUser = (req, res) => {
    delete req.session.auth;
    res.locals.user = false
    res.locals.userId = -1

    req.session.save( () => { res.redirect('/users/login') })

};

const requireAuth =  (req, res, next) => {
    if (!res.locals.authenticated) {
        return res.redirect('/users/login');
    }
    return next();
};
const requireAdminAuth = async (req, res, next) => {
    const { userId } = req.session.auth;
    const user = await db.User.findByPk(userId);

    if (!user.isAdmin) {
        return res.redirect('/')
    }
    return next();
};

module.exports = {
    requireAdminAuth,
    loginUser,
    restoreUser,
    logoutUser,
    requireAuth,
};
