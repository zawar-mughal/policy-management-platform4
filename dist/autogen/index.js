"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Policy_module_1 = require("./Policy/Policy.module");
const PolicyDocument_module_1 = require("./PolicyDocument/PolicyDocument.module");
const PolicyUser_module_1 = require("./PolicyUser/PolicyUser.module");
const PolicyAssignment_module_1 = require("./PolicyAssignment/PolicyAssignment.module");
exports.default = [
    Policy_module_1.PolicyModule,
    PolicyDocument_module_1.PolicyDocumentModule,
    PolicyUser_module_1.PolicyUserModule,
    PolicyAssignment_module_1.PolicyAssignmentModule,
];
//# sourceMappingURL=index.js.map