import PropTypes from 'prop-types';

const Navlist = ({ isSmallDevice }) => {

    const navArr = ['Home', 'Recipes', 'About', 'Search'];

    return (
        <nav className={
            !isSmallDevice ?
                'hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'
                : 'grid gap-6 text-lg font-medium'}>
            {
                navArr.map((navItem, idx) => {
                    return (
                        <a key={idx} className='cursor-pointer text-muted-foreground transition-colors hover:text-foreground' >{navItem}</a>
                    )
                })
            }
        </nav>
    )
}

Navlist.propTypes = {
    isSmallDevice: PropTypes.bool,
}

export default Navlist;