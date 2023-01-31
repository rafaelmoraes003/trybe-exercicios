import platform

print(
    f"Platform: {platform.system()}\n"
    f"Version: {platform.release()}\n"
    f"Architecture: {platform.architecture()[0]}"
)