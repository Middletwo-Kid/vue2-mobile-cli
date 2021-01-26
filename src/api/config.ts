const env = process.env.NODE_ENV;
let crmUrl;
let loanUrl;
switch (env){
  case 'development':
    crmUrl = '/api';
    loanUrl = '/loan';
    break;
  case 'production':
    crmUrl = 'http://aaa.com/api';
    loanUrl = 'https://bbb.com/loan';
    break;
  default:
    crmUrl = '/api';
    loanUrl = '/loan';
    break;
}

const baseUrl: {[key: string]: any} = {
  crm: crmUrl,
  loan: loanUrl,
};

export default baseUrl;
