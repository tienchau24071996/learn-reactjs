import React from 'react';
import PropTypes from 'prop-types';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { Box } from '@material-ui/core';

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({product}) {
    const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

    return (
        <Box>
            <img src={thumbnailUrl} alt={product.name} width="100%" />
        </Box>
    );
}

export default ProductThumbnail;