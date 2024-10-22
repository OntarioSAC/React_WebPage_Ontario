import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ type }) => {
  switch (type) {
    case 'logo1':
      return (
		<svg xmlns="http://www.w3.org/2000/svg" width="148" height="43" fill="none">
		    <path fill="#fff" d="M67 36.2h-.2l-1.3 3.7h-.8l1.5-4.4h1.3l1.5 4.4h-.8L67 36.2zm-1.5 2H68v.6h-2.5v-.6zM74 36.9c0 .2 0 .3-.1.5s-.1.3-.3.4c-.1.1-.3.2-.5.3-.2.1-.4.1-.7.1h-1v1.7h-.7v-4.4h1.7c.3 0 .6.1.9.2.2.1.4.3.5.5.2.2.2.4.2.7zm-1.5.7c.2 0 .3 0 .4-.1.1-.1.2-.1.3-.2.1-.1.1-.2.1-.4s-.1-.4-.2-.5c-.1-.1-.3-.2-.6-.2h-1v1.4h1zM77.6 36.2h-.2L76 39.9h-.8l1.5-4.4H78l1.5 4.4h-.8l-1.1-3.7zm-1.5 2h2.5v.6h-2.5v-.6zM83.1 35.5c.3 0 .6.1.9.2.2.1.4.3.5.5.1.2.2.4.2.7 0 .2 0 .3-.1.5s-.1.3-.3.4c-.1.1-.3.2-.5.3-.2.1-.4.1-.7.1h-1v1.7h-.7v-4.4h1.7zm.8 1.4c0-.2-.1-.4-.2-.5-.1-.1-.3-.2-.6-.2h-1v1.4h1c.2 0 .3 0 .4-.1.1-.1.2-.1.3-.2 0-.2.1-.3.1-.4zm-.4 1 1.2 2h-.8l-1.1-2h.7zM86.4 35.5h3.4v.6h-1.3v3.7h-.7v-3.7h-1.3v-.6zM92.6 39.9h-.7v-4.4h.8l1.5 3.4 1.5-3.4h.8v4.4h-.7V37l-1.3 2.9h-.6L92.6 37v2.9zM101.6 36.2h-2.2v1.2h1.7v.6h-1.7v1.3h2.2v.6h-3v-4.4h3v.7zM107.1 35.5v4.4h-.8l-2-3.2v3.2h-.7v-4.4h.8l2 3.2v-3.2h.7zM109.1 35.5h3.4v.6h-1.3v3.7h-.7v-3.7h-1.3v-.6zM114.9 38.7c0 .1.1.2.1.3.1.1.2.2.3.2.1.1.3.1.4.1.3 0 .5-.1.6-.2.1-.1.2-.3.2-.4 0-.1 0-.3-.1-.3-.1-.1-.2-.2-.3-.2-.1-.1-.3-.1-.5-.2-.2 0-.3-.1-.5-.2s-.3-.1-.4-.2l-.3-.3c-.1-.1-.1-.3-.1-.5 0-.3.1-.5.2-.7.1-.2.3-.3.5-.4.2-.1.5-.1.8-.1.2 0 .5 0 .7.1.2.1.4.2.5.3.1.1.2.3.3.5l-.7.2c0-.1-.1-.2-.1-.2-.1-.1-.2-.1-.3-.2-.1 0-.2-.1-.4-.1-.1 0-.3 0-.4.1-.1 0-.2.1-.3.2-.1.1-.1.2-.1.3 0 .1 0 .2.1.3.1.1.2.1.3.2.1 0 .3.1.4.1.2 0 .3.1.5.2s.3.1.5.2c.1.1.3.2.3.4s.1.3.1.6c0 .2-.1.5-.2.7-.1.2-.3.4-.5.5-.2.1-.5.2-.8.2-.3 0-.5 0-.7-.1l-.6-.3c-.1-.2-.2-.3-.3-.5l.8-.6zM49.4 30.3c-1.7 0-3.3-.3-4.7-.9-1.5-.6-2.8-1.4-3.9-2.5s-2-2.4-2.6-3.8c-.6-1.5-.9-3.1-.9-4.9 0-1.8.3-3.4.9-4.9.6-1.5 1.5-2.8 2.6-3.9s2.4-1.9 3.9-2.5c1.5-.6 3-.9 4.7-.9 1.7 0 3.2.3 4.7.9 1.5.6 2.7 1.4 3.8 2.5 1.1 1.1 2 2.4 2.6 3.9.6 1.5.9 3.1.9 4.9 0 1.8-.3 3.4-.9 4.9-.6 1.5-1.5 2.8-2.6 3.8-1.1 1.1-2.4 1.9-3.8 2.5-1.5.7-3.1.9-4.7.9zm0-3.4c1.5 0 2.9-.4 4.1-1.1 1.2-.7 2.1-1.7 2.8-3 .7-1.3 1-2.8 1-4.6 0-1.8-.3-3.3-1-4.6-.7-1.3-1.6-2.3-2.8-3-1.2-.7-2.6-1.1-4.1-1.1-1.5 0-2.9.4-4.1 1.1-1.2.7-2.1 1.7-2.8 3-.7 1.3-1 2.8-1 4.6 0 1.8.3 3.3 1 4.6.7 1.3 1.6 2.3 2.8 3 1.1.8 2.5 1.1 4.1 1.1zM63.9 13.3h3.5l.3 1.7c.6-.6 1.2-1.1 2-1.4.8-.3 1.6-.5 2.5-.5 1.3 0 2.5.3 3.5.8 1 .6 1.7 1.4 2.2 2.4.5 1.1.8 2.4.8 4v9.9h-3.8v-9.4c0-1.4-.3-2.5-.9-3.2-.6-.7-1.4-1.1-2.6-1.1-1.2 0-2.1.4-2.7 1.1-.6.7-.9 1.8-.9 3.2v9.4H64V13.3zM82.4 13.3V8.5h3.9v4.8h4v3.4h-4v7.5c0 1 .2 1.7.6 2.1.4.4.9.6 1.5.6s1.3 0 1.9-.1v3.3c-1 .2-1.9.3-2.9.2-.9-.1-1.8-.3-2.5-.8-.7-.4-1.3-1.1-1.8-2-.5-.9-.7-2-.7-3.4v-7.5H80v-3.4h2.4zM103.1 30.2l-.3-2.1c-.5.7-1.2 1.3-1.9 1.7-.7.4-1.7.6-3 .6-1.2 0-2.2-.2-3.1-.6-.9-.4-1.5-1-2-1.7s-.7-1.5-.7-2.5c0-1.4.5-2.6 1.6-3.6s2.6-1.6 4.6-1.8l4.5-.5v-1.3c0-.5-.2-1-.7-1.5-.5-.4-1.2-.7-2.3-.7-.9 0-1.7.2-2.4.7-.7.4-1.1 1.1-1.3 2l-3.3-1.2c.4-1.5 1.3-2.7 2.6-3.5 1.3-.8 2.8-1.3 4.7-1.3 2.2 0 3.9.6 5 1.7s1.7 2.5 1.7 4.2v11.3h-3.7zm-.3-7.5-4.1.5c-.9.1-1.5.4-1.9.7-.4.4-.6.8-.6 1.4 0 .5.2 1 .6 1.3.4.4 1 .6 1.7.6.9 0 1.7-.2 2.4-.5.6-.3 1.1-.8 1.5-1.5.3-.6.5-1.4.5-2.3v-.2zM109.3 13.3h3.5l.3 2.1c.5-.6 1-1 1.6-1.4.6-.4 1.3-.6 2-.8.7-.1 1.4-.1 2.2.1v3.5c-.6-.2-1.2-.3-1.9-.2-.7.1-1.3.4-1.9.7-.6.4-1 1-1.4 1.7-.4.7-.5 1.6-.5 2.6v8.6h-3.8V13.3zM123.3 10.8c-.7 0-1.3-.2-1.8-.7-.5-.5-.7-1-.7-1.7s.2-1.3.7-1.8c.5-.5 1.1-.7 1.8-.7s1.3.2 1.7.7c.5.5.7 1.1.7 1.8s-.2 1.2-.7 1.7c-.5.4-1 .7-1.7.7zm-2 2.5h3.8v17h-3.8v-17zM136.2 30.3c-1.6 0-3.1-.4-4.4-1.1-1.3-.7-2.3-1.7-3-3-.7-1.3-1.1-2.8-1.1-4.6 0-1.8.4-3.3 1.1-4.7.7-1.3 1.8-2.3 3.1-3 1.3-.7 2.8-1.1 4.4-1.1 1.6 0 3.1.4 4.4 1.1 1.3.7 2.3 1.7 3.1 3 .8 1.3 1.2 2.8 1.2 4.6 0 1.8-.4 3.3-1.2 4.7-.8 1.3-1.8 2.3-3.2 3-1.3.8-2.7 1.1-4.4 1.1zm0-3.4c.8 0 1.5-.2 2.3-.6.7-.4 1.3-1 1.8-1.8s.7-1.8.7-3-.2-2.2-.6-2.9c-.4-.8-1-1.4-1.7-1.8-.7-.4-1.5-.6-2.3-.6-.8 0-1.5.2-2.2.6-.7.4-1.2 1-1.6 1.8s-.6 1.8-.6 3 .2 2.2.6 2.9c.4.8.9 1.4 1.6 1.8.5.4 1.2.6 2 .6z"/>
		    <path fill="#12b092" d="M27.9 12.2 17.7 2c-.5-.5-1.4-.5-2 0l-9.4 9.5c-2.7 2.7-4.2 6.4-4.2 10.2 0 3.9 1.5 7.5 4.2 10.2L15.6 42c.3.4.8.5 1.2.5.4 0 .8-.1 1.1-.5l9.9-9.4c2.7-2.7 4.2-6.4 4.2-10.3s-1.4-7.3-4.1-10.1zm1.3 10.3c0 3.1-1.2 6-3.3 8.2L17 39.2 8.5 30C6.2 27.7 5 24.8 5 21.7s1.2-6 3.4-8.2l8.3-8.4 9.1 9.2c2.2 2.2 3.4 5.1 3.4 8.2z"/>
		    <path fill="#12b092" d="M15.4 16.6h3.4v22.5h-3.4zM24.4 32.7l-3.3 3V23.1h3.3zM13.1 35.9l-3.4-3.2v-9.6h3.4z"/>
		</svg>
      );
    default:
      return (
		<svg xmlns="http://www.w3.org/2000/svg" width="148" height="43" fill="none">
		    <path fill="#fff" d="M51.483 33.75c-1.693 0-3.283-.295-4.77-.885a11.73 11.73 0 0 1-3.894-2.5 11.583 11.583 0 0 1-2.607-3.844c-.63-1.486-.944-3.125-.944-4.919 0-1.769.315-3.397.944-4.882a11.801 11.801 0 0 1 2.607-3.863 11.611 11.611 0 0 1 3.895-2.518c1.488-.59 3.078-.884 4.77-.884 1.691 0 3.276.294 4.752.884a11.662 11.662 0 0 1 3.876 2.518 11.802 11.802 0 0 1 2.608 3.863c.63 1.486.944 3.113.943 4.882 0 1.793-.314 3.432-.943 4.917a11.593 11.593 0 0 1-2.608 3.844 11.78 11.78 0 0 1-3.876 2.5c-1.477.592-3.061.888-4.753.887Zm0-3.437c1.556 0 2.939-.357 4.15-1.072 1.211-.714 2.16-1.724 2.848-3.028.685-1.304 1.028-2.84 1.028-4.61 0-1.792-.343-3.335-1.03-4.628-.685-1.294-1.634-2.298-2.846-3.012-1.213-.715-2.596-1.073-4.15-1.073-1.554 0-2.937.357-4.15 1.072-1.212.715-2.167 1.719-2.865 3.012-.697 1.293-1.047 2.835-1.05 4.628 0 1.77.349 3.307 1.047 4.611.697 1.305 1.652 2.314 2.865 3.028 1.212.715 2.597 1.072 4.153 1.072Zm14.628-13.577h3.5l.273 1.668a6.266 6.266 0 0 1 2.042-1.395 6.39 6.39 0 0 1 2.556-.51c1.35 0 2.511.277 3.485.833.973.556 1.722 1.372 2.247 2.45.526 1.078.79 2.422.79 4.032v9.936h-3.877v-9.426c0-1.428-.291-2.506-.875-3.232-.583-.726-1.458-1.089-2.623-1.087-1.19 0-2.093.368-2.71 1.105-.618.738-.927 1.82-.927 3.25v9.392h-3.876l-.005-17.016Zm18.675-.084v-4.764h3.946v4.764h4.016v3.369h-4.016v7.554c0 1.02.194 1.73.583 2.127.389.396.898.612 1.527.646a9.765 9.765 0 0 0 1.904-.085v3.267c-.952.202-1.929.265-2.9.187-.949-.08-1.8-.34-2.555-.783-.755-.442-1.361-1.095-1.819-1.956-.458-.862-.687-1.996-.686-3.403V20.02h-2.402v-3.369h2.402Zm20.946 16.928-.343-2.076a5.653 5.653 0 0 1-1.958 1.668c-.757.385-1.763.578-3.019.578-1.19 0-2.22-.198-3.088-.595-.87-.397-1.538-.954-2.007-1.67-.47-.714-.705-1.548-.705-2.5 0-1.43.532-2.626 1.596-3.59 1.064-.965 2.625-1.56 4.683-1.787l4.495-.476v-1.326c0-.543-.24-1.037-.721-1.48-.48-.443-1.246-.664-2.299-.663-.914 0-1.709.22-2.384.663-.675.442-1.127 1.106-1.356 1.991l-3.362-1.225c.437-1.497 1.301-2.665 2.593-3.504s2.864-1.259 4.718-1.26c2.242 0 3.923.556 5.044 1.668 1.121 1.11 1.682 2.529 1.683 4.253v11.33h-3.57Zm-.343-7.486-4.118.51c-.87.114-1.522.358-1.957.732a1.78 1.78 0 0 0-.652 1.412c0 .522.212.97.635 1.344.423.374 1 .561 1.732.562.938 0 1.733-.17 2.385-.511a3.395 3.395 0 0 0 1.476-1.463c.331-.635.497-1.418.497-2.348l.002-.238Zm6.624-9.358h3.499l.309 2.11c.45-.561.996-1.04 1.613-1.413a5.988 5.988 0 0 1 2.007-.766 5.054 5.054 0 0 1 2.179.068v3.539a3.957 3.957 0 0 0-1.904-.153 4.387 4.387 0 0 0-1.87.748c-.572.398-1.041.953-1.407 1.668-.366.714-.549 1.593-.548 2.637v8.576h-3.876l-.002-17.014Zm14.079-2.586c-.709 0-1.303-.238-1.784-.714-.48-.477-.72-1.044-.72-1.701 0-.703.24-1.293.72-1.77.481-.477 1.075-.715 1.784-.715.687 0 1.27.239 1.75.715.481.476.721 1.066.721 1.77 0 .658-.24 1.225-.721 1.7a2.393 2.393 0 0 1-1.75.716Zm-1.957 2.586h3.876V33.75h-3.876V16.736Zm15.013 17.014c-1.648 0-3.123-.357-4.427-1.072a7.664 7.664 0 0 1-3.053-3.028c-.731-1.304-1.097-2.84-1.097-4.61 0-1.792.378-3.346 1.133-4.662a7.788 7.788 0 0 1 3.122-3.046c1.326-.714 2.802-1.071 4.426-1.072 1.647 0 3.129.358 4.444 1.072a8.103 8.103 0 0 1 3.139 3.029c.778 1.305 1.167 2.842 1.167 4.61 0 1.793-.395 3.347-1.184 4.662a8.122 8.122 0 0 1-3.191 3.046c-1.339.714-2.832 1.072-4.479 1.071Zm-.035-3.436c.798 0 1.583-.199 2.282-.579.72-.385 1.309-.97 1.767-1.752.458-.784.687-1.787.686-3.012 0-1.179-.217-2.16-.652-2.943-.435-.783-1.006-1.367-1.715-1.753a4.742 4.742 0 0 0-2.3-.578 4.382 4.382 0 0 0-2.213.578c-.675.387-1.219.97-1.63 1.753-.412.782-.618 1.786-.618 3.011 0 1.18.201 2.161.601 2.944.4.782.932 1.366 1.595 1.752a4.29 4.29 0 0 0 2.197.579Z"/>
		    <path fill="#cbf000" d="M15.547 23.501h-3.36v3.273h3.36V23.5Zm4.516 0h-3.36v3.273h3.36V23.5Zm-4.516 4.354h-3.36v3.272h3.36v-3.272Zm4.516 0h-3.36v3.272h3.36v-3.272Z"/>
		    <path fill="#cbf000" d="M27.716 11.2 16.583.353a1.258 1.258 0 0 0-1.75 0L4.535 10.386C1.61 13.234 0 17.022 0 21.05c0 4.019 1.603 7.796 4.514 10.644l10.418 10.92a1.258 1.258 0 0 0 1.756.056l10.996-10.11.032-.03a14.908 14.908 0 0 0 3.35-4.879 14.805 14.805 0 0 0 0-11.571 14.908 14.908 0 0 0-3.35-4.88ZM6.732 12.525l8.976-8.746 9.812 9.56a11.895 11.895 0 0 1 3.188 5.362 11.82 11.82 0 0 1 .026 6.225l-3.508-3.417v-4.676h-3.278v1.482l-6.235-6.075-.035.035-.026-.026-12.15 11.838a11.83 11.83 0 0 1-.396-3.037c0-3.22 1.287-6.248 3.625-8.525h.002Zm9.193 26.688L6.77 29.616l-.04-.04a12.197 12.197 0 0 1-1.947-2.459l10.904-10.624 11.765 11.461a12.09 12.09 0 0 1-1.916 2.42l-9.611 8.84Z"/>
		</svg>
      );
  }
};

Logo.propTypes = {
  type: PropTypes.oneOf(['logo1', 'default']).isRequired,
};

export default Logo;