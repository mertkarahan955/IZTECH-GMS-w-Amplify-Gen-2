import { LoginDataSrcImpl } from "../../app/auth/data/datasource/LoginDatasrcImpl";
import { LoginRepoImpl } from "../../app/auth/data/repository/LoginRepoImpl";
import { Login, Logout } from "../../app/auth/domain/usecase/AuthenticationUseCase";
import UserDatasrscImpl from "../../app/user/data/datasource/UserDatasrcImpl";
import { UserRepoImpl } from "../../app/user/data/repository/UserRepoImpl";
import { GetUser } from "../../app/user/domain/usecase/GetUser";



// Initialize dependencies
const loginDatasource = new LoginDataSrcImpl();
const loginRepository = new LoginRepoImpl(loginDatasource);
const loginUseCase = new Login(loginRepository);
const signOutUseCase = new Logout(loginRepository);

// Initialize User-related dependencies
const userDatasource = new UserDatasrscImpl();
const userRepository = new UserRepoImpl(userDatasource);
const getUserUseCase = new GetUser(userRepository);

// Export initialized dependencies
export const DI = {
  signOutUseCase,
  loginUseCase,
  getUserUseCase
};
