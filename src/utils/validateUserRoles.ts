type User = {
  roles: string[];
};

type ValidateUserRoles = {
  user: User;
  roles?: string[];
};

export function validateUserRoles({ user, roles }: ValidateUserRoles) {
  if (roles?.length > 0) {
    const hasAllRoles = roles?.every((role) => {
      return user?.roles.includes(role);
    });

    if (!hasAllRoles) {
      return false;
    }
  }

  return true;
}
