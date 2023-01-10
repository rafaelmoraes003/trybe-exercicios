from abc import ABC, abstractmethod

class SystemAccess(ABC):
    def set_permission(self, can_access):
        pass


class SupportSystemAccess(SystemAccess):
    def __init__(self, can_access=False):
        self.name = "support"
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class FinanceSystemAccess(SystemAccess):
    def __init__(self, can_access=False):
        self.name = "finance"
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class SalesSystemAccess(SystemAccess):
    def __init__(self, can_access=False):
        self.name = "sales"
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class Account(ABC):
    def __init__(self, username):
        self.username = username
        self.permissions = []
        self.create_account()

    @abstractmethod
    def create_account(self):
        pass

    def show_permissions(self):
        permissions_names = [
            permission.name for permission in self.permissions
        ]
        return permissions_names

    def add_permission(self, permission):
        self.permissions.append(permission)


class SupportAccount(Account):
    def create_account(self):
        self.add_permission(SupportSystemAccess(True))

class SupportAndSalesAccount(Account):
    def create_account(self):
        self.add_permission(SupportSystemAccess(True))
        self.add_permission(SalesSystemAccess(True))

class ManagerAccount(Account):
    def create_account(self):
        self.add_permission(SupportSystemAccess(True))
        self.add_permission(SalesSystemAccess(True))
        self.add_permission(FinanceSystemAccess(True))


support_account = SupportAccount("user1")
print(support_account.show_permissions())

support_and_sales_account = SupportAndSalesAccount("user2")
print(support_and_sales_account.show_permissions())

manager_account = ManagerAccount("user3")
print(manager_account.show_permissions())