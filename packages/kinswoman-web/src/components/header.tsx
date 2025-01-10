import React from 'react';


export const KinswomanHeader = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              background: '#985959',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img style={{ height: '60px' }} src={'./logo.svg'} />
            </div>
            <div style={{
              background: '#985959',
              display: 'flex',
              alignSelf: 'center',
              padding: '12px',
              borderBottomLeftRadius: '8px',
              borderBottomRightRadius: '8px',
            }}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img style={{ height: '100px' }} src={'./hands.png'} />
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{marginRight: '8px'}}>
                  <img style={{height: '20px'}} src={'./n.png'} />
                </div>
                <div style={{ display: 'flex', gap: '12px', maxWidth: '200px', flexDirection: 'column' }}>
                  <img style={{height: '20px', width: '150px'}} src={'./kinz-woman.png'} />
                  <img src={'./same-root.png'} />
                </div>
              </div>
            </div>
          </div>
    )
}