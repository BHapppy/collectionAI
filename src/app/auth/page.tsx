import {FC} from 'react';
import cl from './auth.module.scss';
import AuthMenu from '../modules/authMenu/authMenu';



const Auth: FC = ({}) => {
   
    return ( 
        <div className={cl.auth_container} >
            <AuthMenu/>
        </div>
    );
}
export default Auth