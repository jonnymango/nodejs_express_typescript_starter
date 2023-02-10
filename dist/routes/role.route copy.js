"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleRoute = void 0;
const express_1 = require("express");
const role_controller_1 = require("../controllers/role.controller");
const roleRoute = () => {
    const router = (0, express_1.Router)();
    router.post('/roles', role_controller_1.createRole);
    router.get('/roles', role_controller_1.getAllRoles);
    router.get('/roles/:id', role_controller_1.getRole);
    router.put('/roles/:id', role_controller_1.updateRole);
    router.delete('/roles/:id', role_controller_1.deleteRole);
    return router;
};
exports.roleRoute = roleRoute;
