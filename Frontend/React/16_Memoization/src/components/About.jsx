import React from 'react'

const About = ({users}) => {

    console.log("About rendering...");
    
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default React.memo(About, (prevProps, nextProps) => {
  return prevProps.users.id === nextProps.users.id;
})

/**
 * prevProps -> old props
 * nextProps -> new props
 *
 * Return true → do NOT re-render
 * Return false → re-render
 *
 * Example:
 * return prevProps.user.id === nextProps.user.id
 * → Component re-renders only when user id changes
 */