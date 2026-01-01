"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const PolicyAssignment_dto_1 = require("./dtos/PolicyAssignment.dto");
const PolicyAssignment_controller_1 = require("./PolicyAssignment.controller");
const PolicyAssignment_service_1 = require("./PolicyAssignment.service");
const baseRequest = {
    parsed: {
        fields: [],
        paramsFilter: [],
        search: {},
        filter: [],
        or: [],
        join: [],
        sort: [],
        authPersist: undefined,
        limit: 10,
        offset: 0,
        page: 1,
        cache: undefined,
    },
    options: {},
};
describe('PolicyAssignmentController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: PolicyAssignment_service_1.PolicyAssignmentService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [PolicyAssignment_controller_1.PolicyAssignmentController],
            providers: [PolicyAssignment_service_1.PolicyAssignmentService, ApiServiceProvider],
        }).compile();
        controller = module.get(PolicyAssignment_controller_1.PolicyAssignmentController);
        spyService = module.get(PolicyAssignment_service_1.PolicyAssignmentService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call PolicyAssignmentController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call PolicyAssignmentController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new PolicyAssignment_dto_1.PolicyAssignment();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=PolicyAssignment.controller.spec.js.map