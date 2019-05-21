import util from '../../helpers/util';

const authStringBuilder = () => {
  let domString = '';
  domString += '<h2>Auth</h2>';
  util.printToDom('auth', domString);
};

export default { authStringBuilder };
