function checkInfiniteLoop() {
    while (true) {
        break;
    }

    for (;;) {
        break;
    }

    while (always) {
        break;
    }
}

const always = true;