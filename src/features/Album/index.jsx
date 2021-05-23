import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

Albumfeature.propTypes = {};

function Albumfeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Gái già lắm chiêu",
            thumnailUrl: "https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
        },
        {
            id: 2,
            name: "Lời xưng tội số 8",
            thumnailUrl: "https://s3img.vcdn.vn/mobile/123phim/2021/03/loi-xung-toi-so-8-8-years-c18-16145811561780_215x318.png"
        },
        {
            id: 3,
            name: "Tom & Jerry",
            thumnailUrl: "https://s3img.vcdn.vn/mobile/123phim/2021/02/tom-jerry-16127706651597_215x318.png"
        },
    ]

    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default Albumfeature;