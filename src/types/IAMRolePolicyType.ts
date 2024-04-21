export interface IAMRolePolicy {
    PolicyName: string;
    PolicyDocument: {
        Version: string;
        Statement: {
            Sid: string;
            Effect: string;
            Action: string[];
            Resource: string | string[];
        }[];
    };
}