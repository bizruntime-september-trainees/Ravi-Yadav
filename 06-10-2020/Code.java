class A {
    A() {
        System.out.println("A()");
    }

    {
        System.out.println("IIB -A");
    }
    static {
        System.out.println("SIB-A");
    }
}

class B extends A {

    B()
    {
        System.out.println("B()");
    }
}