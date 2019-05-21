import util from '../../helpers/util';

const birfdayStringBuilder = () => {
  let domString = '';
  domString += '<h2>Birfday</h2>';
  util.printToDom('birfday', domString);
};

export default { birfdayStringBuilder };
