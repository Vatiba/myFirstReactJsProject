import React from 'react'
import { connect } from 'react-redux'
import Preloader from '../common/Preloader/Preloader';

const mapStateToProps = (state) => ({
    isFetching: state.profilePage.isFetching
})

export default function withPreloader(Component) {
    const PreloaderComponent = (props) => {
        if (props.isFetching) {
            return <Preloader />
        }
        return <Component {...props} />
    }


    return connect(mapStateToProps)(PreloaderComponent);
}
