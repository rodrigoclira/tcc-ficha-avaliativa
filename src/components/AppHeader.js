import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderDivider,
    CHeaderNav,
    CNavLink,
    CNavItem,
} from '@coreui/react'

const AppHeader = () => {

    return (
        <CHeader position="sticky" className="mb-4">
            <CContainer fluid>
                <CHeaderBrand className="mx-auto d-md-none" to="/">
                </CHeaderBrand>
                <CHeaderNav className="d-none d-md-flex me-auto">
                    <CNavItem>
                        <CNavLink to="/home" component={NavLink} color="fff">
                            Home
                        </CNavLink>
                    </CNavItem>
                </CHeaderNav>
                <CHeaderNav>
                    <CNavItem className="py-2 py-lg-1">
                        <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
                    </CNavItem>
                </CHeaderNav>
            </CContainer>
            <CHeaderDivider />
            <CContainer fluid>
            </CContainer>
        </CHeader>
    )
}

export default AppHeader
