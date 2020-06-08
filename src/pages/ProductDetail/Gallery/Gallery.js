import React, { PropTypes } from 'react';
import Lightbox from 'react-images';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  width: ${p => p.width}px;
`;

const Wrapper = styled.div`
  margin: ${p => p.padding / 2}px;
  cursor: ${p => p.clickable ? 'pointer' : 'auto'};
`;

const Image = styled.img`
  display: block;
`;

function ratio({ width, height }) {
    return (width / height);
}

function adjustSizes({ photos, columns, width, padding }) {
    // divide photos over rows, max cells based on `columns`
    // effectively resulting in [[0, 1, 2], [3, 4, 5], [6, 7]]
    const rows = photos.reduce((acc, cell, idx) => {
        const row = Math.floor(idx / columns);
        acc[row] = (acc[row]) ? [...acc[row], cell] : [cell]; // eslint-disable-line no-param-reassign
        return acc;
    }, []);

    // calculate total ratio of each row, and adjust each cell height and width
    // accordingly.
    const modifiedRows = rows.map((row) => {
        const totalRatio = row.reduce((result, photo) => result + ratio(photo), 0);
        const rowWidth = Math.floor(width - (row.length * padding));
        const height = rowWidth / totalRatio;

        return row.map(photo => ({
            ...photo,
            height,
            width: height * ratio(photo),
        }));
    });

    // flatten the rows back to list of cells
    return modifiedRows.reduce((acc, row) => [...acc, ...row], []);
}

class Gallery extends React.Component {
    constructor() {
        super();

        this.state = {
            currentImage: 0,
            isOpen: false,
        };
    }

    openLightbox = (index) => {
        this.setState({
            currentImage: index,
            isOpen: true,
        });
    };

    closeLightbox = () => {
        this.setState({
            currentImage: 0,
            isOpen: false,
        });
    };

    showPrev = () => {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    };

    showNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    };

    render() {
        const { photos, columns, width, padding } = this.props;
        const { enabled: lightboxEnabled, ...lightboxProps } = {
            ...Gallery.defaultProps.lightbox,
            ...this.props.lightbox,
        };

        const { currentImage, isOpen } = this.state;

        const thumbs = adjustSizes({ photos, columns, width, padding });

        return (
            <Container width={width}>
                {thumbs.map((p, idx) => (
                    <Wrapper
                        key={idx}
                        padding={padding}
                        clickable={lightboxEnabled}
                        onClick={() => this.openLightbox(idx)}
                    >
                        <Image src={p.src} height={p.height} width={p.width} alt="" />
                    </Wrapper>
                ))}

                {lightboxEnabled &&
                    <Lightbox
                        currentImage={currentImage}
                        images={photos.map(p => p.large)}
                        isOpen={isOpen}
                        onClose={this.closeLightbox}
                        onClickPrev={this.showPrev}
                        onClickNext={this.showNext}
                        {...lightboxProps}
                    />
                }
            </Container>
        );
    }
}

Gallery.defaultProps = {
    columns: 3,
    padding: 4,
    lightbox: {
    enabled: true,
    width: 1600,
    showImageCount: false,
    backdropClosesModal: true,
    },
};

Gallery.propTypes = {
    width: PropTypes.number.isRequired,
    padding: PropTypes.number,
    columns: PropTypes.number,
    lightbox: PropTypes.shape({
    enabled: PropTypes.bool,
    showImageCount: PropTypes.bool,
    backdropClosesModal: PropTypes.bool,
    }),
    photos: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        large: PropTypes.shape({
        src: PropTypes.string.isRequired,
        srcset: PropTypes.arrayOf(PropTypes.string),
        caption: PropTypes.string,
        }),
    })),
};

export default Gallery;