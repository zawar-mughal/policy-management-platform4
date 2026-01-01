"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyAssignmentModule = void 0;
const common_1 = require("@nestjs/common");
const PolicyAssignment_entity_1 = require("./PolicyAssignment.entity");
const typeorm_1 = require("@nestjs/typeorm");
const PolicyAssignment_service_1 = require("./PolicyAssignment.service");
const PolicyAssignment_controller_1 = require("./PolicyAssignment.controller");
let PolicyAssignmentModule = class PolicyAssignmentModule {
};
exports.PolicyAssignmentModule = PolicyAssignmentModule;
exports.PolicyAssignmentModule = PolicyAssignmentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PolicyAssignment_entity_1.PolicyAssignment])],
        providers: [PolicyAssignment_service_1.PolicyAssignmentService],
        exports: [PolicyAssignment_service_1.PolicyAssignmentService],
        controllers: [PolicyAssignment_controller_1.PolicyAssignmentController],
    })
], PolicyAssignmentModule);
//# sourceMappingURL=PolicyAssignment.module.js.map