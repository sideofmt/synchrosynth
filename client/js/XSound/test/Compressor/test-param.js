describe('Compressor TEST', function() {

    describe('Compressor.prototype.param', function() {

        describe('threshold', function() {

            afterEach(function() {
                compressor.param('threshold', -24);
            });

            // Getter
            // Positive

            it('should return -24', function() {
                expect(compressor.param('threshold')).toEqual(-24);
            });

            // Negative

            it('should return the instance of Compressor', function() {
                expect(compressor.param('')).toEqual(jasmine.any(Compressor));
            });

            // Setter
            // Positive

            it('should return -24.5', function() {
                compressor.param('threshold', -24.5);
                expect(compressor.param('threshold')).toEqual(-24.5);
            });

            it('should return 0', function() {
                compressor.param('threshold', 0);
                expect(compressor.param('threshold')).toEqual(0);
            });

            it('should return -100', function() {
                compressor.param('threshold', -100);
                expect(compressor.param('threshold')).toEqual(-100);
            });

            // Negative

            it('should return -24', function() {
                compressor.param('threshold', 0.1);
                expect(compressor.param('threshold')).toEqual(-24);
            });

            it('should return -24', function() {
                compressor.param('threshold', -100.1);
                expect(compressor.param('threshold')).toEqual(-24);
            });

        });

        describe('knee', function() {

            afterEach(function() {
                compressor.param('knee', 30);
            });

            // Getter
            // Positive

            it('should return 30', function() {
                expect(compressor.param('knee')).toEqual(30);
            });

            // Negative

            it('should return the instance of Compressor', function() {
                expect(compressor.param('')).toEqual(jasmine.any(Compressor));
            });

            // Setter
            // Positive

            it('should return 30.5', function() {
                compressor.param('knee', 30.5);
                expect(compressor.param('knee')).toEqual(30.5);
            });

            it('should return 40', function() {
                compressor.param('knee', 40);
                expect(compressor.param('knee')).toEqual(40);
            });

            it('should return 0', function() {
                compressor.param('knee', 0);
                expect(compressor.param('knee')).toEqual(0);
            });

            // Negative

            it('should return 30', function() {
                compressor.param('knee', 40.1);
                expect(compressor.param('knee')).toEqual(30);
            });

            it('should return 30', function() {
                compressor.param('knee', -1.1);
                expect(compressor.param('knee')).toEqual(30);
            });

        });

        describe('ratio', function() {

            afterEach(function() {
                compressor.param('ratio', 12);
            });

            // Getter
            // Positive

            it('should return 12', function() {
                expect(compressor.param('ratio')).toEqual(12);
            });

            // Negative

            it('should return the instance of Compressor', function() {
                expect(compressor.param('')).toEqual(jasmine.any(Compressor));
            });

            // Setter
            // Positive

            it('should return 12.5', function() {
                compressor.param('ratio', 12.5);
                expect(compressor.param('ratio')).toEqual(12.5);
            });

            it('should return 20', function() {
                compressor.param('ratio', 20);
                expect(compressor.param('ratio')).toEqual(20);
            });

            it('should return 1', function() {
                compressor.param('ratio', 1);
                expect(compressor.param('ratio')).toEqual(1);
            });

            // Negative

            it('should return 12', function() {
                compressor.param('ratio', 20.1);
                expect(compressor.param('ratio')).toEqual(12);
            });

            it('should return 12', function() {
                compressor.param('ratio', 0.9999);
                expect(compressor.param('ratio')).toEqual(12);
            });

        });

        describe('attack', function() {

            afterEach(function() {
                compressor.param('attack', 0.003);
            });

            // Getter
            // Positive

            it('should return 0.003000000026077032', function() {
                expect(compressor.param('attack')).toEqual(0.003000000026077032);
            });

            // Negative

            it('should return the instance of Compressor', function() {
                expect(compressor.param('')).toEqual(jasmine.any(Compressor));
            });

            // Setter
            // Positive

            it('should return 0.5', function() {
                compressor.param('attack', 0.5);
                expect(compressor.param('attack')).toEqual(0.5);
            });

            it('should return 1', function() {
                compressor.param('attack', 1);
                expect(compressor.param('attack')).toEqual(1);
            });

            it('should return 0', function() {
                compressor.param('attack', 0);
                expect(compressor.param('attack')).toEqual(0);
            });

            // Negative

            it('should return 0.003000000026077032', function() {
                compressor.param('attack', 1.1);
                expect(compressor.param('attack')).toEqual(0.003000000026077032);
            });

            it('should return 0.003000000026077032', function() {
                compressor.param('attack', -0.1);
                expect(compressor.param('attack')).toEqual(0.003000000026077032);
            });

        });

        describe('release', function() {

            afterEach(function() {
                compressor.param('release', 0.25);
            });

            // Getter
            // Positive

            it('should return 0.25', function() {
                expect(compressor.param('release')).toEqual(0.25);
            });

            // Negative

            it('should return the instance of Compressor', function() {
                expect(compressor.param('')).toEqual(jasmine.any(Compressor));
            });

            // Setter
            // Positive

            it('should return 0.5', function() {
                compressor.param('release', 0.5);
                expect(compressor.param('release')).toEqual(0.5);
            });

            it('should return 1', function() {
                compressor.param('release', 1);
                expect(compressor.param('release')).toEqual(1);
            });

            it('should return 0', function() {
                compressor.param('release', 0);
                expect(compressor.param('release')).toEqual(0);
            });

            // Negative

            it('should return 0.25', function() {
                compressor.param('release', 1.1);
                expect(compressor.param('release')).toEqual(0.25);
            });

            it('should return 0.25', function() {
                compressor.param('release', -0.1);
                expect(compressor.param('release')).toEqual(0.25);
            });

        });

    });

});
