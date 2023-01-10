VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
RESET = "\033[0m"


class Log():
    def dispara_log(self, message):
        return message


class LogSuccess():
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERDE}{self.log.dispara_log(message)}{RESET}"


class LogWarning():
    def __init__(self, log: Log):
        self.log = log
    
    def dispara_log(self, message):
        return f"{LARANJA}{self.log.dispara_log(message)}{RESET}"


class LogError():
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERMELHO}{self.log.dispara_log(message)}{RESET}"


log_success = LogSuccess(Log())
print(log_success.dispara_log("Everything is ok."))