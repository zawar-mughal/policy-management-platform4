"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const PolicyUser_dto_1 = require("./dtos/PolicyUser.dto");
const PolicyUser_controller_1 = require("./PolicyUser.controller");
const PolicyUser_service_1 = require("./PolicyUser.service");
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
describe('PolicyUserController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: PolicyUser_service_1.PolicyUserService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [PolicyUser_controller_1.PolicyUserController],
            providers: [PolicyUser_service_1.PolicyUserService, ApiServiceProvider],
        }).compile();
        controller = module.get(PolicyUser_controller_1.PolicyUserController);
        spyService = module.get(PolicyUser_service_1.PolicyUserService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call PolicyUserController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call PolicyUserController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new PolicyUser_dto_1.PolicyUser();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=PolicyUser.controller.spec.js.map