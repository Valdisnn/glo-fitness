const selectClub = () => {
    const clubDropdown = document.querySelector('.clubs-list>ul');

    let expanded = false;
    clubDropdown.style.display = 'none';

    document.addEventListener('click', (event) => {
        if (event.target.closest('.club-select') && clubDropdown.style.display == 'none' || event.target.matches('.clubs-list ul>li')) {
            expanded = true;
            clubDropdown.style.display = 'block';
        } else if (expanded && !event.target.matches('.clubs-list ul')) {
            expanded = false;
            clubDropdown.style.display = 'none';
        }
    });
};

export default selectClub;