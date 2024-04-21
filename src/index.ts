import {IAMRolePolicy} from "./types/IAMRolePolicyType";

export function verifyInputJson(data: IAMRolePolicy | any): boolean {

    if (!data || !data.PolicyDocument || !data.PolicyDocument.Statement) {
        throw new Error('Invalid IAM Role Policy: Missing PolicyDocument or Statement field.');
    }

    let hasResourceField = false;

    for (const statement of data.PolicyDocument.Statement) {
        if (statement.Resource) {
            if (statement.Resource === "*") {
                return false;
            }
            hasResourceField = true;
        }
    }

    if (!hasResourceField) {
        throw new Error('Invalid IAM Role Policy: No Resource field found in any statement.');
    }

    return true;
}
