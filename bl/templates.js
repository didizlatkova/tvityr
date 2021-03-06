var fs = require("fs"),
    path = require('path'),
    handlebars = require("handlebars"),
    mainTemplateFile = fs.readFileSync(path.join(__dirname, '../views/main.html'), 'utf8'),
    homeTemplateFile = fs.readFileSync(path.join(__dirname, '../views/home.html'), 'utf8'),
    errorTemplateFile = fs.readFileSync(path.join(__dirname, '../views/error.html'), 'utf8'),
    editTemplateFile = fs.readFileSync(path.join(__dirname, '../views/edit.html'), 'utf8'),
    usersTemplateFile = fs.readFileSync(path.join(__dirname, '../views/users.html'), 'utf8'),
    searchTemplateFile = fs.readFileSync(path.join(__dirname, '../views/search.html'), 'utf8'),
    adminLoginTemplateFile = fs.readFileSync(path.join(__dirname, '../views/admin.html'), 'utf8'),
    profileTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/profile.html'), 'utf8'),
    loginTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/login.html'), 'utf8'),
    registerTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/register.html'), 'utf8'),
    navTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/nav.html'), 'utf8'),
    navSearchTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/nav-search.html'), 'utf8'),
    popularTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/popular.html'), 'utf8'),
    addTvitTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/add-tvit.html'), 'utf8'),
    messagesTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/messages.html'), 'utf8'),
    followTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/follow.html'), 'utf8'),
    verifyTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/verify.html'), 'utf8'),
    deleteTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/delete.html'), 'utf8'),
    searchWidgetTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/search-widget.html'), 'utf8'),
    forgotTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/forgot.html'), 'utf8'),
    forgotSuccessTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/forgot-success.html'), 'utf8'),
    cropTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/crop.html'), 'utf8'),
    genderTemplateFile = fs.readFileSync(path.join(__dirname, '../views/partials/gender.html'), 'utf8');

module.exports = {
    setup: function() {
        handlebars.registerPartial({
            profile: profileTemplateFile,
            login: loginTemplateFile,
            register: registerTemplateFile,
            nav: navTemplateFile,
            navSearch: navSearchTemplateFile,
            popular: popularTemplateFile,
            addTvit: addTvitTemplateFile,
            messages: messagesTemplateFile,
            follow: followTemplateFile,
            verify: verifyTemplateFile,
            delete: deleteTemplateFile,
            searchWidget: searchWidgetTemplateFile,
            forgot: forgotTemplateFile,
            crop: cropTemplateFile,
            gender: genderTemplateFile
        });

        handlebars.registerHelper('ifCond', function(v1, operator, v2, options) {
            switch (operator) {
                case '==':
                    return (v1 == v2) ? options.fn(this) : options.inverse(this);
                case '===':
                    return (v1 === v2) ? options.fn(this) : options.inverse(this);
                case '!==':
                    return (v1 !== v2) ? options.fn(this) : options.inverse(this);
                case '<':
                    return (v1 < v2) ? options.fn(this) : options.inverse(this);
                case '<=':
                    return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                case '>':
                    return (v1 > v2) ? options.fn(this) : options.inverse(this);
                case '>=':
                    return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                case '&&':
                    return (v1 && v2) ? options.fn(this) : options.inverse(this);
                case '||':
                    return (v1 || v2) ? options.fn(this) : options.inverse(this);
                default:
                    return options.inverse(this);
            }
        });

        return {
            mainTemplate: handlebars.compile(mainTemplateFile),
            homeTemplate: handlebars.compile(homeTemplateFile),
            adminTemplate: handlebars.compile(adminLoginTemplateFile),
            errorTemplate: handlebars.compile(errorTemplateFile),
            editTemplate: handlebars.compile(editTemplateFile),
            messagesTemplate: handlebars.compile(messagesTemplateFile),
            usersTemplate: handlebars.compile(usersTemplateFile),
            followTemplate: handlebars.compile(followTemplateFile),
            verifyTemplate: handlebars.compile(verifyTemplateFile),
            deleteTemplate: handlebars.compile(deleteTemplateFile),
            searchTemplate: handlebars.compile(searchTemplateFile),
            forgotTemplate: handlebars.compile(forgotTemplateFile),
            forgotSuccessTemplate: handlebars.compile(forgotSuccessTemplateFile)
        };
    }
};