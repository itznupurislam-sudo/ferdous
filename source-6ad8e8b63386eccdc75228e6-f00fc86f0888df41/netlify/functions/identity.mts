import type {UserValidateEvent} from '@netlify/functions';
// Public registration cannot grant access. Existing admin-invited users accept
// their invitations through Identity; roles are assigned in the Netlify UI.
export default { userValidate(event:UserValidateEvent){return event.deny();} };
