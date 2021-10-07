import { connect } from 'http2'
import React, { useEffect } from 'react'
import { Redirect } from 'react-router'

export const LogOut = (props: any) => {
  
    return (
        <div>
            <Redirect to='/Home'/>
        </div>
    )
}
