import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const Alert = () => {
  const MySwal = withReactContent(Swal);
  const alert = () => {
    MySwal.fire({
      title: 'All victories will be yours!',
      width: 600,
      padding: '3em',
      color: '#716add',
      confirmButtonText: 'POBEDAAAA',
      background: '#fff url(/images/trees.png)',
      backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `,
    });
  };
  alert();

  return <div></div>;
};
