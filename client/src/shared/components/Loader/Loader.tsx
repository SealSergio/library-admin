import { FC } from "react";
import "./Loader.scss";

// export const Loader: FC = () => {
//     return (
//         <div className="loader">
//             <span>
//                 Загрузка...
//             </span>        
//         </div>
//     )
// }

export interface ILoaderProps {
  color?: 'blue' | 'white';
}

export const Loader: FC<ILoaderProps> = ({ color = 'blue' }) => {
    return (
        <div className="loader-wrapper">
            <div className="loader" data-color={color}>
                <div className="loader__segment" />
                <div className="loader__segment" />
                <div className="loader__segment" />
            </div>
        </div>
    );
};

