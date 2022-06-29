import React from 'react'
 import cl from './AddCallModal.module.css'
const AddCallModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.addCallModal]
    if (visible){
        rootClasses.push(cl.active);
    }

  return (
    <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)} >
        <div className={cl.addCallModalContent} onClick={(e)=>e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default AddCallModal