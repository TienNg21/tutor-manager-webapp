import { IUser } from './interfaces';
import { storage } from './localStorage';

export const enum AUTH_SERVICE_KEY {
    JWT_TOKEN = 'JWT_TOKEN',
    LOGIN_USER = 'USER',
}
class LocalStorageAuthService {
    setJwtToken(value: string) {
        storage.setLocalStorage(AUTH_SERVICE_KEY.JWT_TOKEN, value);
    }

    setLoginTutor(tutor: IUser | null) {
        storage.setLocalStorage(
            AUTH_SERVICE_KEY.LOGIN_USER,
            JSON.stringify(tutor || ''),
        );
    }

    getJwtToken(): string {
        return storage.getLocalStorage(AUTH_SERVICE_KEY.JWT_TOKEN);
    }

    getLoginTutor(): IUser {
        return storage.getObjectFromKey(AUTH_SERVICE_KEY.LOGIN_USER) as IUser;
    }

    resetJwtToken() {
        storage.setLocalStorage(AUTH_SERVICE_KEY.JWT_TOKEN, '');
    }

    resetAll() {
        this.setLoginTutor({});
        this.resetJwtToken();
    }
}

const localStorageAuthService = new LocalStorageAuthService();
export default localStorageAuthService;