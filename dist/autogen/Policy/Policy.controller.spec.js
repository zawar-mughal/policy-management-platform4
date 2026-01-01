"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Policy_dto_1 = require("./dtos/Policy.dto");
const Policy_controller_1 = require("./Policy.controller");
const Policy_service_1 = require("./Policy.service");
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
describe('PolicyController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Policy_service_1.PolicyService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Policy_controller_1.PolicyController],
            providers: [Policy_service_1.PolicyService, ApiServiceProvider],
        }).compile();
        controller = module.get(Policy_controller_1.PolicyController);
        spyService = module.get(Policy_service_1.PolicyService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call PolicyController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call PolicyController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Policy_dto_1.Policy();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Policy.controller.spec.js.map