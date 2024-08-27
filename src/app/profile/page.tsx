import {FC} from 'react';
import cl from './profile.module.scss'
import ProfileHeader from '@/components/profileHeader/profileHeader';



const Profile: FC = ({}) => {
    return ( 
        <div className={cl.grid_container} >
            <ProfileHeader userAvatar=''/>
        </div>
    );
}

export default Profile