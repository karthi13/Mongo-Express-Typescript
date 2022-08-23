"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const addGoogleUser = (User) => {
    ({ id, email, firstName, lastName, profilePhoto }) => {
        const user = new User({
            id, email, firstName, lastName, profilePhoto, source: "google"
        });
        return user.save();
    };
    const getUsers = (User) => () => {
        return User.find({});
    };
    const getUserByEmail = (User) => ({ email }) => __awaiter(void 0, void 0, void 0, function* () {
        return yield User.findOne({ email });
    });
    module.exports = (User) => {
        return {
            addGoogleUser: addGoogleUser(User),
            getUsers: getUsers(User),
            getUserByEmail: getUserByEmail(User)
        };
    };
};
//# sourceMappingURL=user.service.js.map