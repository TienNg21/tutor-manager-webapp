import { ICustomer } from './interfaces';
import { storage } from './localStorage';

export const enum AUTH_SERVICE_KEY {
    JWT_TOKEN = 'JWT_TOKEN',
    LOGIN_CUSTOMER = 'CUSTOMER',
}
class LocalStorageAuthService {
    setJwtToken(value: string) {
        storage.setLocalStorage(AUTH_SERVICE_KEY.JWT_TOKEN, value);
    }

    setLoginTutor(tutor: ICustomer | null) {
        storage.setLocalStorage(
            AUTH_SERVICE_KEY.LOGIN_CUSTOMER,
            JSON.stringify(tutor || ''),
        );
    }

    getJwtToken(): string {
        return storage.getLocalStorage(AUTH_SERVICE_KEY.JWT_TOKEN);
    }

    getLoginTutor(): ICustomer {
        return storage.getObjectFromKey(AUTH_SERVICE_KEY.LOGIN_CUSTOMER) as ICustomer;
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