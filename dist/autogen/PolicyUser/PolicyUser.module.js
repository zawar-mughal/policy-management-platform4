"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyUserModule = void 0;
const common_1 = require("@nestjs/common");
const PolicyUser_entity_1 = require("./PolicyUser.entity");
const typeorm_1 = require("@nestjs/typeorm");
const PolicyUser_service_1 = require("./PolicyUser.service");
const PolicyUser_controller_1 = require("./PolicyUser.controller");
let PolicyUserModule = class PolicyUserModule {
};
exports.PolicyUserModule = PolicyUserModule;
exports.PolicyUserModule = PolicyUserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([PolicyUser_entity_1.PolicyUser])],
        providers: [PolicyUser_service_1.PolicyUserService],
        exports: [PolicyUser_service_1.PolicyUserService],
        controllers: [PolicyUser_controller_1.PolicyUserController],
    })
], PolicyUserModule);
//# sourceMappingURL=PolicyUser.module.js.map