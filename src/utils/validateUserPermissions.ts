type User = {
  permissions: string[];
};

type ValidateUserPermissions = {
  user: User;
  permissions?: string[];
};

export function validateUserPermissions({
  user,
  permissions,
}: ValidateUserPermissions) {
  if (permissions?.length > 0) {
    const hasAllPermissions = permissions?.every((permission) => {
      return user?.permissions.includes(permission);
    });

    if (!hasAllPermissions) {
      return false;
    }
  }

  return true;
}
