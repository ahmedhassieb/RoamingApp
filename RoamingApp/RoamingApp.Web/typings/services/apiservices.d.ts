declare module abp.services.app {
    interface role {
        updateRolePermissions(input: updateRolePermissionsInput, httpParams?: any): abp.IPromise;
    }
    interface updateRolePermissionsInput {
        roleId: number;
        grantedPermissionNames: string[];
    }



    interface session {
        getCurrentLoginInformations(httpParams?: any): abp.IGenericPromise<getCurrentLoginInformationsOutput>;
    }
    interface getCurrentLoginInformationsOutput {
        user: userLoginInfoDto;
        tenant: tenantLoginInfoDto;
    }

    interface userLoginInfoDto {
        name: string;
        surname: string;
        userName: string;
        emailAddress: string;
        id: number;
    }

    interface tenantLoginInfoDto {
        tenancyName: string;
        name: string;
        id: number;
    }



    interface tenant {
        getTenants(httpParams?: any): abp.IGenericPromise<listResultDtoOfTenantListDto>;
        createTenant(input: createTenantInput, httpParams?: any): abp.IPromise;
    }
    interface listResultDtoOfTenantListDto {
        items: iReadOnlyListOfTenantListDto;
    }

    interface createTenantInput {
        tenancyName: string;
        name: string;
        adminEmailAddress: string;
        connectionString: string;
    }

    interface iReadOnlyListOfTenantListDto {
        item: tenantListDto;
    }

    interface tenantListDto {
        tenancyName: string;
        name: string;
        id: number;
    }



    interface user {
        prohibitPermission(input: prohibitPermissionInput, httpParams?: any): abp.IPromise;
        removeFromRole(userId: number, roleName: string, httpParams?: any): abp.IPromise;
        getUsers(httpParams?: any): abp.IGenericPromise<listResultDtoOfUserListDto>;
        createUser(input: createUserInput, httpParams?: any): abp.IPromise;
    }
    interface prohibitPermissionInput {
        userId: number;
        permissionName: string;
    }

    interface listResultDtoOfUserListDto {
        items: iReadOnlyListOfUserListDto;
    }

    interface iReadOnlyListOfUserListDto {
        item: userListDto;
    }

    interface userListDto {
        name: string;
        surname: string;
        userName: string;
        fullName: string;
        emailAddress: string;
        isEmailConfirmed: boolean;
        lastLoginTime: Date;
        isActive: boolean;
        creationTime: Date;
        id: number;
    }

    interface createUserInput {
        userName: string;
        name: string;
        surname: string;
        emailAddress: string;
        password: string;
        isActive: boolean;
    }



}

