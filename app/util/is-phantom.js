export default function() {
  if (!Function.prototype.bind) {
    return true;
  }
  if (Function.prototype.bind.toString().replace(/bind/g, 'Error') != Error.toString()) {
    return true;
  }
  if (Function.prototype.toString.toString().replace(/toString/g, 'Error') != Error.toString()) {
    return true;
  }

  return false;
}
