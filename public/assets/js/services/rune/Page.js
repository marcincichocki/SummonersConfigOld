var Sum_1 = require('./Sum');
var Rune_1 = require('./Rune');
/** Class representing a rune page. */
var Page = (function () {
    /**
     * Create a page.
     * @constructor
     * @param {string} name - Name of rune page.
     */
    function Page(name) {
        this.name = name;
        /**
         * TODO: Change(or not) class properties to public/private/static
         */
        // Store ip sum of all runes in the current page.
        // RuneService.count() updates this property.
        this.ip = 0;
        // Store every rune in page(Rune instances).
        this.runes = [];
        // Store calculated values with unitIds of all runes in page.
        this.sums = [];
        // FIXME: This should be private property.
        //
        // Store ammount of maximum available runes to add in respective types.
        //
        // this.counter[0] => "mark", max 9
        // this.counter[1] => "seal", max 9
        // this.counter[2] => "glyph", max 9
        // this.counter[3] => "quintessence", max 3
        this.counter = [9, 9, 9, 3];
        // FIXME: This should be static property.
        //
        // Store runes first slot information for respective types. Slot is 1-based.
        //
        // this.slotStart[0] => "mark" starts at slot number 1
        // this.slotStart[0] => "seal" starts at slot number 10, and so on..
        this.slotStart = [1, 10, 19, 28];
    }
    /**
     * Get first available slot for given typeId
     * @param {number} typeId - Number representing type.
     * @param {number[]} [unofficial=[]] - Array of rune slots that will
     * be added, but are not yet in this.runes.
     * @returns {(number | boolean)} Slot number 1-based
     */
    Page.prototype.getSlot = function (typeId, unofficial) {
        if (unofficial === void 0) { unofficial = []; }
        // Get starting position.
        var from = this.slotStart[typeId];
        // Get finishing position.
        var to = from + 9 < 30 ? from + 9 : 30;
        // Get array of taken rune slots.
        var runes = this.runes.map(function (rune) { return rune.runeSlot; }).concat(unofficial);
        // Loop through all slots for specyfic typeId.
        for (var i = from; i <= to; i += 1) {
            // If slot does not exist in array, return slot.
            if (runes.indexOf(i) === -1)
                return i;
        }
    };
    /**
     * Check if rune slot in null.
     * @param  {number | void} slot - Slot of rune.
     * @return {boolean} Value describing if slot is null.
     */
    Page.prototype.checkSlot = function (slot) {
        return slot === null;
    };
    /**
     * Update counter and add rune to this.runes array.
     * @param {Rune} rune - Rune which will be added.
     * @param {string} rune.id - Rune unique id.
     * @param {number | void} [rune.runeSlot=null] - Unique slot which
     * rune will be placed in.
     * @param {number} typeId - Number representing type.
     * @param {number} [ammount=1] - Ammount of runes to add.
     */
    Page.prototype.addRune = function (rune, typeId, ammount, slots) {
        var _this = this;
        if (ammount === void 0) { ammount = 1; }
        // Decrease counter by ammount of runes to add.
        this.counter[typeId] -= ammount;
        // Adding multiple runes at once.
        if (ammount > 1) {
            // create array of runes to add.
            var runes = new Array(ammount).fill(rune);
            // Update each rune slot if null.
            if (this.checkSlot(rune.runeSlot)) {
                runes.forEach(function (rune, index, thisArr) {
                    thisArr[index] = new Rune_1.Rune(rune.id, slots[index] || _this.getSlot(typeId, thisArr.map(function (rune) { return rune.runeSlot; }).filter(Boolean)));
                });
            }
            // Add new runes.
            Array.prototype.push.apply(this.runes, runes);
        }
        else {
            // Add just one rune.
            // Set rune slot if null.
            if (this.checkSlot(rune.runeSlot))
                rune.runeSlot = this.getSlot(typeId);
            // Add new rune.
            this.runes.push(rune);
        }
    };
    /**
     * Update counter and remove rune from this.runes array.
     * @param {Rune} rune - Rune which will be removed.
     * @param {string} rune.id - Rune unique id.
     * @param {number} rune.runeSlot - Unique slot of given rune.
     * @param {number} typeId - Number representing type.
     */
    Page.prototype.removeRune = function (rune, typeId) {
        // Get first index of given rune in array.
        var index = this.runes.indexOf(rune);
        // Increase counter.
        this.counter[typeId] += 1;
        // Remove rune from array.
        this.runes.splice(index, 1);
    };
    /**
     * Generate sums of current page.
     * @param {UniqueRune[]} runes [description]
     * @param {number} runes[].ip - Ip const of single rune
     * @param {*} runes[].stats - Object which contain unit: <Number>value paris.
     * @param {number} runes[].ammount - Quantity of exactly same runes.
     */
    Page.prototype.count = function (runes) {
        var _this = this;
        // Reset array.
        this.sums = [];
        // Get sum of ip.
        this.ip = runes.reduce(function (sum, rune) { return sum + (rune.ip * rune.ammount); }, 0);
        runes.forEach(function (rune) {
            // Some runes may give more then one stat. For example
            // Greater Mark of Hybrid Penetration gives both Armor Penetration and
            // Magic Penetration.
            Object.keys(rune.stats).forEach(function (unitId) {
                // FIXME: Regeneration stats are in fact per second, not per 5 seconds
                // like description says. Should multiply value times 5 if unitId
                // contains 'Regeneration' string.
                var value = parseFloat((rune.stats[unitId] * rune.ammount).toFixed(2));
                var index = _this.sums.map(function (sum) { return sum.unitId; }).indexOf(unitId);
                // If stat alredy is in array then add values, otherwise create new
                // sum with new stat and initial value.
                if (index > -1) {
                    _this.sums[index].value += value;
                }
                else {
                    _this.sums.push(new Sum_1.Sum(unitId, value));
                }
            });
        });
    };
    return Page;
})();
exports.Page = Page;
