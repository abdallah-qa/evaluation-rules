import { CaseOne } from 'mon-framework';

class OrderAmount extends TestCase {
    public verifyOrderTotal() {
        const items = [
            { name: "Livre", price: 12 },
            { name: "Stylo", price: 3 }
        ];
        const total = this.calculateTotal(items);
        this.assertEquals(total, 15);
    }

    private calculateTotal(items: { name: string; price: number }[]): number {
        return items.reduce((sum, item) => sum + item.price, 0);
    }
}