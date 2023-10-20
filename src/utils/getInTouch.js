export const getInTouch = () => {

  const handleClick = (e) => {
    e.preventDefault()
    const recipient = 'elautaropintos@gmail.com'
    const subject = encodeURIComponent('');
    const body = encodeURIComponent('');
    const recruiterEmail = '';
  
    const mailtoLink = `mailto:${recipient}?cc=${recruiterEmail}&subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    handleClick
  )
}