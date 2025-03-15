function set(overloaded = false, frozen = false) {
    console.log(`Enjoying the gofile download unlocker?\n- Patreon: https://patreon.com/elaraservices\n- GitHub: https://github.com/SUPERCHIEFYT`);
    const files = [...Object.values(appdata.fileManager.mainContent.data.children)];
    for (const f of files) {
        const updated = [];
        if (f.overloaded !== overloaded) {
            appdata.fileManager.mainContent.data.children[f.id].overloaded = overloaded;
            updated.push(`overloaded=${overloaded}`);
        }
        if (f.isFrozen !== frozen) {
            appdata.fileManager.mainContent.data.children[f.id].isFrozen = frozen;
            updated.push(`frozen=${frozen}`);
        }
        if (!updated.length) {
            continue;
        }
        console.log(`[FILE_UPDATED]: ${f.name} got updated to: ${updated.join(" | ")}`);
    }
    return true;
}
set();
