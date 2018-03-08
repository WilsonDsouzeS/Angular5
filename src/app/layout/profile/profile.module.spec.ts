import { ProfileModule } from './profile.module';

describe('ProfileModule', () => {
    let ProfileModule: ProfileModule;

    beforeEach(() => {
        ProfileModule = new ProfileModule();
    });

    it('should create an instance', () => {
        expect(ProfileModule).toBeTruthy();
    });
});
