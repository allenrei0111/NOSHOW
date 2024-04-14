import { useRef, useState } from 'react';
import './CSS/Favorite.css';

const Favorite = ({products}) => { 
const [favorite, setFavorite] = useState([]);

const toggleFavorite = (productId) => {
    if (favorite.includes(productId)) {
        const updatedFavorite = favorite.filter((id) => id !== productId);
        
    }
};

} 